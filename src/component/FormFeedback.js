import { useState } from 'react';
function FormFeedback(){
    const [score, setscore] = useState('10');
    const [comment, setcomment] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <= 10){
            alert('Please provide comment');
            return;
        }
        console.log("form submitted")
        setscore('10');
        setcomment('');

    }
    return(
        <form onSubmit={handleClick}>
            <fieldset>
                <h2>Feedback form</h2>
                <div className="field">
                    <label>Score :</label>
                    <input type="range" min="0" max="10" value={score} onChange={e=> setscore(e.target.value)}/>
                </div>
                <label>Comment :</label>
                <textarea value={comment} onChange={e=>setcomment(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}
export default FormFeedback;