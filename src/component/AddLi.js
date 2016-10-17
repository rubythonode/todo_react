var React = require('react');

var AddLi = React.createClass({
    handleClick: function () {
        this.props.handleData(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();
    },

    render: function () {
        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요"
                       ref={function(ref){this.textInput = ref;}.bind(this)}
                />
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleClick.bind(null, this)}>등록</button>
                </span>
            </div>
        );
    }
});

module.exports = AddLi;
