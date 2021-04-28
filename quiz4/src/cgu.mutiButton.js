import Button from '@material-ui/core/Button'

const styleArgument = { fontsize: '100px', color: 'red' };

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText=event.target.innerText+"被點了"
}
const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
        output.push(<Button onClick={changeText}>第{i}個按鍵</Button>)
        return output;
}
export default multiButton;