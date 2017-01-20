
import * as React from "react";
import * as  QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import TopBanner from './topBanner';
import { changeCanvas } from './../../action/mainPage';

interface BlogMainProps {
    dispatch?: any
}

class BlogMain extends React.Component<BlogMainProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(changeCanvas(0))
    }

    render() {
        return(
            <QueueAnim>
                <div key="1">
                    <div style={{height:"4px"}}>0</div>
                    <TopBanner/>
                </div>
                <div>
                    article
                </div>
            </QueueAnim>
        )
    }
}

function mapStateToProps(state: any){

    return {

    }
}

export default connect(mapStateToProps)(BlogMain)
