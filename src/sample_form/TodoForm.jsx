import React, { useState } from "react";
import axios from "axios";

function TodoForm() {
	const [ subject, setSubject] = useState('');
    const [ content, setContent] = useState('');

    const subjectHandler = (e) => {
        setSubject(e.target.value);
    };

    const areaHandler = (e) => {
        setContent(e.target.value);
    };

	const createHandler = async () => {
		const data = {
			id: Date.now(),
			subject: subject,
            content: content,
			completed: false,
		};

		try {
			const response = await axios.post("http://localhost:8000/todos", data);
			console.log("debug>>> post result", response.data);
            setSubject('');
            setContent('');
            window.alert("정상처리 되었습니다.");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="container">
			<h2>Todo-Create</h2>
			<form>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label>Subject</label>
							<input type="text" className="form-control" value={subject} onChange={subjectHandler}/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label>State</label>
							<div>
								<button className="btn btn-primary" type="button">
									InComplete
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="form-group">
						<label>Body</label>
						<textarea className="form-control" cols="30" rows="10"  value={content} onChange={areaHandler}></textarea>
					</div>
				</div>
				<p />
				<button
					className="btn btn-outline-dark"
					type="button"
					onClick={createHandler}
				>
					Create
				</button>
				<button className="btn btn-outline-danger ms-2">Cancel</button>
			</form>
		</div>
	);
}

export default TodoForm;
