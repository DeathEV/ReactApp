export default function AInput(props) {
    return(
        <>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {props.title}
            </label>
            <input type="text" className="border border-black rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={props.iValue} placeholder={props.placeholder || null} onChange={props.iChange} />
        </>
    );
}