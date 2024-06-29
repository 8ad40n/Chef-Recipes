
export default function Bookmark({cooks}) {
  return (
    <div>
        <tr className="flex justify-between">
            <td className="w-24">{cooks.title}</td>
            <td>{cooks.time}</td>
            <td>{cooks.calories}</td>
            <td><button className="text-xs px-2 py-1 bg-[#0BE58A] text-black rounded-3xl">Preparing</button></td>
        </tr>
    </div>
  )
}
