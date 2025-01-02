export default function HorizImgText({ imgSrc, imgAlt="", institute, text, dateFrom, dateTo }) {
    return (
        <div className="flex items-start space-x-2 my-3">
        <img src={imgSrc} alt={imgAlt} className="w-20 h-20 my-1 mr-2" />
        <div className="flex flex-col">
            <strong>{institute}</strong>
            <div>{text}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{dateFrom} - {dateTo}</div>
        </div>
        </div>
    )
}