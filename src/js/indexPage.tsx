
import * as React from "react";
import * as  QueueAnim from "rc-queue-anim/lib";
import { Card, Button} from 'antd';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { changeCanvas} from './../action/mainPage';

interface IndexPageProps {
    dispatch?: any
}

class IndexPage extends React.Component<IndexPageProps, any> {
    constructor(props) {
        super(props)
    }

    bgCanvas ?: any;

    static loginClassName = {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-200px",
        marginTop: "-100px"
    };

    componentDidMount() {
        const { dispatch} = this.props;
        dispatch(changeCanvas(1))

    }

    componentWillUnmount() {
        const { dispatch} = this.props;
        dispatch(changeCanvas(0))
    }


    handleClick(e) {
        // 这里需要封装
        // TODO
        switch (e.target.textContent){
            case "多人博客":{browserHistory.push('/blog')}break;
            default:{browserHistory.push('/')}
        }
    }

    render() {
        return(
            <QueueAnim key="page" type={["bottom","top"]} >
                <div key="1" style={IndexPage.loginClassName}>
                    <Card style={{ width: 400, borderRadius:"10px"}}>
                        <QueueAnim delay={100} type={["right","left"]} onClick={this.handleClick.bind(this)} className="queue-simple">
                            <Button key="2"  type="primary" className="button-right">多人博客</Button>
                            <Button key="3" type="dashed" className="button-right">在线问答</Button>
                            <Button key="4" type="dashed" className="button-right">直播</Button>
                            <Button key="5" type="primary" >github</Button>
                        </QueueAnim>
                    </Card>
                </div>
            </QueueAnim>
        )
    }

}

function mapStateToProps(state:any) {
    return {

    }
}

export default connect(mapStateToProps)(IndexPage)