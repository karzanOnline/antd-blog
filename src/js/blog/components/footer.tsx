/**
 * Created by caozheng on 2017/2/21.
 */
import * as React from 'react';
import { Row, Col, Icon, Layout} from 'antd';
const { Footer } = Layout;

export const BlogFooter = (props) => {
    return (
            <Footer className="main-footer">
                <Row type="flex" align="top" justify="space-between">
                    <Col>
                        <h2><Icon type="github" /> GitHub</h2>
                        <ul className="footer-indent">
                            <li><a>仓库</a></li>
                            <li><a>定制主题</a></li>
                            <li><a>Awesome Ant Design</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h2><Icon type="paper-clip" /> 相关站点</h2>
                        <ul className="footer-indent">
                            <li><a>Ant Design </a>- PC版</li>
                            <li><a>Ant Design Mobile</a>- 移动版</li>
                            <li><a>Ant Motion </a>- 设计动效</li>
                        </ul>
                    </Col>
                    <Col>
                        <h2><Icon type="share-alt" /> 社区</h2>
                        <ul className="footer-indent">
                            <li><a>更新记录</a></li>
                            <li><a>常见问题</a></li>
                            <li><a>在线讨论</a></li>
                            <li><a>StackOverflow</a></li>
                            <li><a>SegmentFault</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Copyright © 2017</h2>
                        KarzanOnline出品
                    </Col>
                </Row>
            </Footer>
    )
};