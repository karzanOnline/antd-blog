
import * as React from "react";
import { connect } from 'react-redux';
import * as BannerAnim from 'rc-banner-anim/lib';
import * as TweenOne from 'rc-tween-one/lib';
import 'rc-banner-anim/assets/index.css';
import '../../css/blog/topBanner.less';
const { Element } = BannerAnim;
const BgElement = Element.BgElement;

interface TopBannerProps {

}

export default class TopBanner extends React.Component<TopBannerProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BannerAnim prefixCls="banner-user" autoPlaySpeed={7000} autoPlay>
                    <Element
                        prefixCls="banner-user-elem"
                        key="0"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{background: '#364D79'}}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            Ant Motion Banner
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            The Fast Way Use Animation In React
                        </TweenOne>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="1"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{background: '#64CBCC'}}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            Ant Motion Banner
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            The Fast Way Use Animation In React
                        </TweenOne>
                    </Element>
                </BannerAnim>

            </div>);
    }
}


