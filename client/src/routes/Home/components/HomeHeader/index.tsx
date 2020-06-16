import React, { useState, CSSProperties } from 'react';
import './index.less';
import classnames from 'classnames';
import { BarsOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'



// 如果用require加载的话，返回值的default属性才是那个图片地址
let logo = require('@/assets/images/zfkelogo.png');

//CSSProperties 行内样式的对象定义
const duration = 1000;//动画持续的时间
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

interface TransitionStyles {
    entering: CSSProperties;
    entered: CSSProperties;
    exiting: CSSProperties;
    exited: CSSProperties;
}
//在不同的阶段给定不同的样式 动画的
const transitionStyles: TransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}


interface Props {//接口类型
    currentCategory: string;//当前选中的分类，数据最后会放在redux仓库中
    setCurrentCategory: (currentCategory: string) => any;//改变仓库中的分类  函数
}
function HomeHeader(props: Props) {
    let [isMenuVisible, setisMenuVisible] = useState(false);//默认不显示菜单
    let setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        let target: HTMLUListElement = event.target as HTMLUListElement;
        let category = target.dataset.category;
        props.setCurrentCategory(category);
        setisMenuVisible(false);
    }
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo.default} />
                {/* 点击按钮的时候取反--开关 */}
                <BarsOutlined onClick={() => setisMenuVisible(!isMenuVisible)} />
            </div>
            <Transition in={isMenuVisible} timeout={duration}>
                {
                    (state:keyof TransitionStyles) => (
                        <ul className="category" onClick={setCurrentCategory} style={{ ...defaultStyle, ...transitionStyles[state] }}>
                            <li data-category="all" className={classnames({ active: props.currentCategory === 'all' })}>全部课程</li>
                            <li data-category="react" className={classnames({ active: props.currentCategory === 'react' })}>React课程</li>
                            <li data-category="vue" className={classnames({ active: props.currentCategory === 'vue' })}>Vue课程</li>
                        </ul>
                    )
                }
            </Transition>
            {/* {
                isMenuVisible && (
                    <ul className="category" onClick={setCurrentCategory}>
                        <li data-category="all" className={classnames({ active: props.currentCategory === 'all' })}>全部课程</li>
                        <li data-category="react" className={classnames({ active: props.currentCategory === 'react' })}>React课程</li>
                        <li data-category="vue" className={classnames({ active: props.currentCategory === 'vue' })}>Vue课程</li>
                    </ul>
                )
            } */}

        </header>
    )
}
export default HomeHeader;



/**
 *动画是如何实现的
 * Transition
 * 动态的给一个元素增加和删除类名，不同的类名对应不同的样式
 * 另外再加一个transtion效果就可以啦
 *style={{ ...defaultStyle, ...transitionStyles[state] }}   ====  默认展开的样式和动画给ul的样式
 *
 */