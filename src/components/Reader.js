import Novel from "./Novel"
import novel from "../mock/novel.json"
import novelTc from "../mock/novel-tc.json"
import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Switch, Slider } from 'antd'
import { ReadOutlined, FontSizeOutlined, BgColorsOutlined, TranslationOutlined, SettingOutlined } from '@ant-design/icons'
import { useHistory, useLocation } from "react-router-dom"

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const Reader = ({book}) => {

    const [night, setNight] = useState(JSON.parse(localStorage.getItem("night")) ?? false)
    const [fontSize, setFontSize] = useState(JSON.parse(localStorage.getItem("fontSize")) ?? 1)
    const [tc, setTc] = useState(JSON.parse(localStorage.getItem("tc")) ?? false)

    const history = useHistory()
    const location = useLocation()
    const paths = location?.pathname.split("/")

    useEffect(() => {
        localStorage.setItem("night", night)
        localStorage.setItem("fontSize", fontSize)
        localStorage.setItem("tc", tc)
    }, [night, fontSize, tc])

    const isSmallScreen = (
        window.innerWidth <= 1024
        || window.innerWidth <= window.innerHeight
    )

    const menu = (
        <Sider className="site-layout-background" width={isSmallScreen ? "100%" : 200}>
            <Menu
                mode={isSmallScreen ? "horizontal" : "inline"}
                defaultSelectedKeys={isSmallScreen ? [] : ['0']}
                defaultOpenKeys={isSmallScreen ? [] : ['chapter']}
                style={isSmallScreen ? {} : { position: "sticky", top: 20 }}
                theme={night ? "dark" : "light"}
            >
                <SubMenu key="chapter" icon={<ReadOutlined />} title="章节">
                    {
                        novel.map((e, i) => (
                            <Menu.Item key={i} onClick={() => {
                                history.push(`/${paths[1]}/${i + 1}`)
                            }}>
                                <a href="#">{e.name}</a>
                            </Menu.Item>
                        ))
                    }
                </SubMenu>
                <SubMenu key="fontsize" icon={<FontSizeOutlined />} title="字体大小">
                    <Menu.Item key="fontsizeslider">
                        <Slider
                            max={4} step={1}
                            value={fontSize}
                            onChange={value => {
                                setFontSize(value)
                            }}
                            tipFormatter={value => `${100 + (25 * value)}%`}
                        />
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="lang" icon={<TranslationOutlined />} title="简繁转换">
                    <Menu.Item key="tc">
                        繁体中文 <Switch checked={tc} size="small" onChange={() => {
                            setTc(tc => !tc)
                        }} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="theme" icon={<BgColorsOutlined />} title="界面主题">
                    <Menu.Item key="night">
                        夜间模式 <Switch checked={night} size="small" onChange={() => {
                            setNight(night => !night)
                        }} />
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )

    const content = (
        <Content style={{ padding: '30px 24px', minHeight: 280 }} className="article">
            <div style={{
                fontSize: `${100 + (25 * fontSize)}%`,
            }}>
                <Novel novel={tc ? novelTc : novel} />
            </div>
        </Content>
    )

    return (
        <div className="yukimi">
            <Layout className={night ? "night" : "day"}>
                <Content style={{ padding: isSmallScreen ? '0 5px' : '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 10px' }}>
                        <Breadcrumb.Item>
                            <a href="." onClick={() => {
                                history.push("/")
                            }}>
                                主页
                            </a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{book?.label}</Breadcrumb.Item>
                        <Breadcrumb.Item>1</Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        isSmallScreen
                            ? (
                                <Layout className="site-layout-background vertical-layout">
                                    {content}
                                    {menu}
                                </Layout>
                            )
                            : (
                                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                                    {content}
                                    {menu}
                                </Layout>
                            )
                    }
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Powered by <a target="_blank" href="https://github.com/yinyanfr/yukimi-lite">Yukimi-lite</a>
                </Footer>
            </Layout>
        </div>
    )
}

export default Reader
