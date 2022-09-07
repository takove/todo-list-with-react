import React, { useState } from "react";

let todoListBottomText = ""

function Home () {
	const [inputValue, setInputValue] = useState('')
	const [newTasks, setNewTasks] = useState([])
	const [pending, setPending] = useState(true)
	
	
	// submit function
	function submit (event) {
		if (event.key === 'Enter' && inputValue !== "") {
			setPending(false)
			setNewTasks([...newTasks, inputValue])
			setInputValue('')
		}
	}
	// deleting function
	function deleteTask (i) {
		const newTask = newTasks.filter((task, index) => {
			if (i == index) {
				return false
			}
			return true
		})
			if (newTask.length == 0) {
				setPending (true)
		}
			setNewTasks(newTask)
			
	}

	const Mapping = newTasks.map((task, index) => {
		return (
			<li key={index} className='my-2 list-group-item showButton'>
				{task}
				<button className="btn-close btn-close-dark float-end hideButton" key={index} type="button" onClick={(event) => deleteTask(index)} ></button>
			</li>
		)
	})

	
	// display
	return (
		<div className="container-fluid">  {/* main frame */}
			<div> {/* THIS ONE IS A VALID COMMENT */}
				<div className=" row col-10 col-sm-8 col-md-7 col-lg-6 mx-auto justify-content-center text-center">
					<h1>home tasks to do</h1>
				</div>
				<div className="row col-10 col-sm-8 col-md-7 col-lg-6 mx-auto justify-content-center">
					<input type="text"
					name=""
					id="taskMaker"
					placeholder="add a todo task"
					onChange={(event) => {
						setInputValue(event.target.value)
					}}
					onKeyDown={submit}
					value={inputValue}/>
					
				</div>
				<div>
					{pending ? (
						<div className="row col-10 col-sm-8 col-md-7 col-lg-6 mx-auto justify-content-center">
							no tasks left, add some to organize your lifestyle
						</div>) : (
							<div>
								<ul className="row col-10 col-sm-8 col-md-7 col-lg-6 mx-auto justify-content-center ps-0">
									{Mapping}
								</ul>
								<div className="row col-10 col-sm-8 col-md-7 col-lg-6 mx-auto justify-content-center">You have {newTasks.length} tasks left</div>	
							</div>			
						)}
				</div>
			</div>			 
		</div>
	)
	
}
export default Home;
