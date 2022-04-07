export default function LoginHeader(props) {
    return(
        <>
            <div className="w-full flex justify-around text-white cursor-default">
                <div className="w-full p-4 mt-2 mx-4">
                    <h1 className="uppercase text-3xl">Shiny Store</h1>
                    <span>Controller</span>
                </div>
                <div className="flex justify-start mt-4 mx-4">
                    <a href="/login" className="py-2 px-4 mt-3">Website</a>
                    <button onClick={props.openDialog} className="h-16 shadow bg-amber-600 hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Register
                    </button>
                </div>
            </div>
        </>
    );
}