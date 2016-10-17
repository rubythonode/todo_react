var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./component/title');

var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다하나'
];

var addLi = (
    <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="할 일을 입력해주세요"/>
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">등록</button>
        </span>
    </div>
);

var todoLi = todos.map(function (todo, i) {
    return (
        <li key={"todo" + i}>
            <span>{todo}</span>
            <span className="btn-container"><a href="#">삭제</a></span>
        </li>
    );
});

ReactDOM.render(
    <div className="container">
        <Title />
        {addLi}
        <hr/>
        <ul>
            {todoLi}
        </ul>
    </div>,

    document.getElementById('app')
);
