function Form({ dispatch, title, designation, handleSubmit }) {
    return (
        <form
            className="mx-auto w-[400px] text-center gap-5 text-lg"
            onSubmit={handleSubmit}
        >
            <label className="flex justify-around w-[350px] mx-auto text-center mb-2">
                Task Title:
                <input
                    type="text"
                    className="border border-black w-[250px] pl-2 rounded-sm shadow-lg"
                    value={title}
                    autoFocus
                    onChange={(e) =>
                        dispatch({ type: 'addTitle', payload: e.target.value })
                    }
                />
            </label>
            <div className="flex justify-between">
                <label className="inline-block align-middle h-[40px] pt-[6px] cursor-pointer">
                    Task Designation
                    <select
                        className="ml-4 w-[150px] cursor-pointer"
                        value={designation}
                        onChange={(e) =>
                            dispatch({
                                type: 'setDesignation',
                                payload: e.target.value,
                            })
                        }
                    >
                        <option value="sprint">Sprint</option>
                        <option value="backlog">Backlog</option>
                    </select>
                </label>
                <input
                    className="border block h-[35px] border-[#00AEEF] text-[#00AEEF] text-md cursor-pointer font-semibold rounded-md w-[60px] px-[4px] hover:bg-[#00AEEF] hover:text-white mt-[5px]"
                    type="submit"
                    value="Add"
                />
            </div>
        </form>
    );
}

export default Form;
