'use client'
import React, { useEffect, useState } from 'react';
import './JsonViewer.css';

function JsonViewer() {
  const [jsonData, setJsonData] = useState({});
  const [toggleState, setToggleState] = useState({});
  // Get all unique keys from all objects in the array
  const getUniqueKeys = (array) => {
    const allKeys = array.reduce((keys, item) => {
      return keys.concat(Object.keys(item));
    }, []);
    return [...new Set(allKeys)];
  };

  // Load jsonData from localStorage on component mount
  useEffect(() => {
    const storedJsonData = localStorage.getItem('jsonData');
    if (storedJsonData) {
      setJsonData(JSON.parse(storedJsonData));
    }
  }, []);
  
  function loadToEdit(){
    document.getElementById('json').value = JSON.stringify(JSON.parse(localStorage.getItem('jsonData')), null, 2);
  }
  function setJsonDataFn(){
    let json = document.getElementById("json").value;
    document.getElementById("json").value = '';
    try{
      if (json != '') {
        const jsnData = JSON.parse(json);
        localStorage.setItem('jsonData', JSON.stringify(jsnData));
        setJsonData(jsnData);
      }
    }catch(e){
      console.log(e);
    }
  }
  function toggleNode(path) {
    return () => {
      setToggleState((prevState) => ({
        ...prevState,
        [path]: !prevState[path],
      }));
    };
  }
  const renderNode = (value, path) => {
    return value && (Array.isArray(value) ? (
      <div>
        <table>
          <thead>
            <tr>
              {getUniqueKeys(value).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.map((item, index) => (
              <tr key={index}>
                {getUniqueKeys(value).map((header, i) => (
                  <td key={i}>
                    {(typeof(item[header]) !== 'object') ?
                      item[header] :
                      (<><button onClick={toggleNode(index + path + i)}>+</button>{toggleState[index + path + i] && renderNode(item[header], index + path + i)}</>)
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      (typeof (value) === 'object') ?
        (
          <div>
            {Object.keys(value).map((key) => (
              <div key={key}> {key} :
                {(typeof(value[key]) === 'string') ? 
                  value[key] :  (<><button onClick={toggleNode(path + key)}>+</button>{toggleState[path + key] && renderNode(value[key], path + key)}</>)
                }
              </div>
            ))}
          </div>
        ) : (
          ((typeof(value) === 'boolean' || typeof(value) === 'string')? value.toString() : <p className='text-cyan-600'>{JSON.stringify(value)}</p>)
          
        )
      )
    );
  }
  return (
    <div className='p-4'>
    <div>
      <button className='btn-primary' type='button' onClick={()=>setJsonDataFn()}>View JSON as table</button>
      <button className='btn-secondary' type='button' onClick={()=>loadToEdit()}>Reload to Edit</button>
      <br/>
      <i>Once loaded json is cleared to make the page  more responsive, use above reload button to edit</i>
      <textarea className='border-blue-100 shadow-lg' id="json" cols="80" rows="8" placeholder="type json here"></textarea>
    </div>
    <div>
      {Object.entries(jsonData).map(([key, value]) => (
        <div key={key}>
          <span>{key} : </span>
          {renderNode(value)}
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default JsonViewer;