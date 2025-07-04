import { useState } from "react";

function useMyInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useMyInput;
