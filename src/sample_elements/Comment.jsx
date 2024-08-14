import Avatar from './Avatar';
import UserInfo from './UserInfo';

function Comment(props) {
	return (
		<div className="comment">
			<UserInfo user={props.author}/>
			<div className="comment-text">{props.text}</div>
			<div className="comment-date">{formatDate(props.date)}</div>
		</div>
	);
}


export default Comment;
