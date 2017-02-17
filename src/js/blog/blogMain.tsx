
import * as React from "react";
import * as  QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import TopBanner from './topBanner';
import { changeCanvas } from './../../action/mainPage';
import { Row, Col, Radio, Icon} from 'antd';
import './../../css/blog/blogMain.less';


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

    searchTypeChange = () => {

    };

    render() {
        return(
            <QueueAnim>
                <div key="1">
                    <div style={{height:"4px"}}>0</div>
                    <TopBanner/>
                </div>
                <Row className="row-main-wrapper" type="flex" align="top" justify="center">
                    <Col className="col-main-article">
                        {/*文章主体内容*/}
                        <Row className="header" type="flex" align="middle" justify="space-between">
                            <label className="lab-title">文章列表</label>
                            <Radio.Group className="group-sort" value="hot" onChange={this.searchTypeChange}>
                                <Radio.Button value="hot">按热度排序</Radio.Button>
                                <Radio.Button value="time">按时间排序</Radio.Button>
                            </Radio.Group>
                        </Row>
                        <Row className="row-article" type="flex" align="top" justify="start">
                            <Col>
                                <img className="article-avatar" src="//7tszky.com1.z0.glb.clouddn.com/FmisQoN6FWTzreXl1xFpDie4CN0F"/>
                            </Col>
                            <Col className="article-content">
                                <Col> 前端进阶之路：如何高质量完成产品需求开发</Col>
                                <Col>陈映平 于 4个月前发表<Icon type="eye" /></Col>
                                <Col>content</Col>
                            </Col>
                            <Col>
                                这里是图片
                            </Col>
                            <Col>
                                这里图标
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-right-chunk">

                    </Col>
                </Row>
            </QueueAnim>
        )
    }
}

function mapStateToProps(state: any){

    return {

    }
}

export default connect(mapStateToProps)(BlogMain)
