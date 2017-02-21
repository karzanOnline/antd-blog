/**
 * Created by caozheng on 2017/2/21.
 */
import * as React from 'react';
import { Col, Tag } from 'antd';

export const NoticePart = (props) => {
    return (
        <Col className="col-right-chunk">
            <Col className="notice-content-right" style={{marginTop:0}}>
                <div className="header">
                    <label className="lab-title">公告栏</label>
                </div>
                <div className="notice-content">
                    这里是公告~~~~~到底放什么东西好呢....
                </div>
            </Col>
            <Col className="notice-content-right">
                <div className="header">
                    <label className="lab-title">文章分类</label>
                </div>
                <div className="notice-content">
                    <Tag color="#f50">React.js</Tag>
                    <Tag color="#2db7f5">less</Tag>
                    <Tag color="#87d068">Javascript</Tag>
                    <Tag color="#108ee9">Redux</Tag>
                </div>
            </Col>
            <Col className="notice-content-right">
                <div className="header">
                    <label className="lab-title">活动图片</label>
                </div>
                <div className="notice-content">
                    这里是活动图片
                </div>
            </Col>
            <Col className="notice-content-right">
                <div className="header">
                    <label className="lab-title">活跃用户</label>
                </div>
                <div className="notice-content">
                    这里是活跃用户
                </div>
            </Col>
        </Col>
    )
};