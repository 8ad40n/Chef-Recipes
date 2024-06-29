import Bookmark from "./bookmark";

export default function Bookmarks({cooks}) {
  return (
    <div className="">
        <div className="shadow-2xl px-6 pt-12 pb-6 rounded-3xl">
            <h1 className="text-2xl text-center font-bold mb-2">Want to cook: {cooks.length}</h1>
            <hr />
            <div className="overflow-x-auto">
                <table className="table-lg mx-auto">
                    <thead>
                        <tr className="flex justify-between">
                            <th className="w-24">Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cooks.map(cook=> <Bookmark cooks={cook}></Bookmark>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
