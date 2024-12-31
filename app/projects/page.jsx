import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: 'Projects', description: 'Projects and utilities about json manipulation and electronics' })

export default function Page() {
    return (
        <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700  ">
            <div className="space-x-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
                    Projects
                </h1>
            </div>
            <div className="flex max-w-lg flex-wrap">
                <div className="container py-12">
                    <div className="card flex gap-4 flex-col justify-between">
                        <div className="card-body">
                            <h2 className="card-title mb-3 text-2xl font-bold leading-8 tracking-tight">Json Viewer</h2>
                            <p className="card-text">This is a JSON tree viewer with preview of folded items, which is kind of nice to see few elements without expanding</p>
                            <a href="/jsonview.html" className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" >Launch &rarr;</a>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title mb-3 text-2xl font-bold leading-8 tracking-tight">Date Diff Utility</h2>
                            <p className="card-text">find the difference between dates expressed in years months days as well as formatted into human readable format</p>
                            <a href="/datediff.html" className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" >Launch &rarr;</a>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title mb-3 text-2xl font-bold leading-8 tracking-tight">Json to CSV</h2>
                            <p className="card-text">Utility to flatten json arrays into tabular(CSV) structure. The columns are csv json-paths. Also the schema is shown. Its useful to serialize random json to csv and back to json.</p>
                            <a href="/json2csv.html" className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" >Launch &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}