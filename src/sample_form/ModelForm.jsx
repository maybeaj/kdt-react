import React, { useState, useEffect } from "react";

function ModelForm() {
	const [keyin, setKeyIn] = useState("");
    const [ item, setItem ] = useState('');
	const txtHandler = (e) => {
		setKeyIn(e.target.value);
	};
    const selectHandler = (e) => {
        setItem(e.target.value);
    }
	useEffect(() => {
		console.log("debug>>> data ,", keyin);
        console.log("debug>>> data select ,", item);
	});
	return (
		<form>
			<label>
				이름:
				<input type="text" value={keyin} onChange={txtHandler} />
			</label>
			<br />
			<label>
				과일을 선택해 주세요 :
				<select value={item} onChange={selectHandler}>
					<option value="apple">사과</option>
					<option value="banana">바나나</option>
					<option value="watermelon">수박</option>
				</select>
			</label>
			<button>Submit</button>
		</form>
	);
}

export default ModelForm;
