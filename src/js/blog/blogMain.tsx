
import * as React from "react";
import * as  QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import TopBanner from './topBanner';
import { changeCanvas } from './../../action/mainPage';
import { Row, Col, Radio, Icon, Layout} from 'antd';
import { BlogFooter } from './components/footer';
import { NoticePart } from './components/noticePart';
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
            <div>
                <div>
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
                        <Row className="row-article">
                            <Col>
                                <img className="article-avatar" src="//7tszky.com1.z0.glb.clouddn.com/FmisQoN6FWTzreXl1xFpDie4CN0F"/>
                            </Col>
                            <Col className="article-content">
                                <h2> <a>前端进阶之路：如何高质量完成产品需求开发</a></h2>
                                <Col>陈映平 于 4个月前发表<Icon type="eye" /></Col>
                                <Col>写在前面 作为一个互联网前端老鸟，这么些年下来，做过的项目也不少。从最初的 我的QQ中心 、
                                 QQ圈子 ，到后面的 QQ群项目 、 腾讯课堂 。从几个人的项目，
                                 到近百号人的项目都经历过。 这期间，实现了很多的产品需求，也积累了
                                 一些经验。这里稍作总结，希望能给新入行的前端小伙伴们一些参考。 做好需求的关键点 要说如何做好一个需求，展开来讲，可以写好几篇文章，
                                 这里只挑重点来讲。 最基本的，就是把握好 3W ：what、when、how。 * wha</Col>
                            </Col>
                            <Col>
                                这里是图片
                            </Col>
                            <Col>
                                这里图标
                            </Col>
                        </Row>
                    </Col>
                    <NoticePart/>
                </Row>
                <BlogFooter/>
            </div>
        )
    }
}

function mapStateToProps(state: any){

    return {

    }
}

export default connect(mapStateToProps)(BlogMain)
