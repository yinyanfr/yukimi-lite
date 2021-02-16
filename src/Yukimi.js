import "./Yukimi.scss"
import Novel from "./components/Novel"
import novel from "./mock/novel.json"
import novelTc from "./mock/novel-tc.json"
import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Switch, Slider } from 'antd'
import { ReadOutlined, FontSizeOutlined, BgColorsOutlined, TranslationOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const Yukimi = () => {

  const [night, setNight] = useState(JSON.parse(localStorage.getItem("night")) ?? false)
  const [fontSize, setFontSize] = useState(JSON.parse(localStorage.getItem("fontSize")) ?? 1)
  const [tc, setTc] = useState(JSON.parse(localStorage.getItem("tc")) ?? false)

  useEffect(() => {
    localStorage.setItem("night", night)
    localStorage.setItem("fontSize", fontSize)
    localStorage.setItem("tc", tc)
  }, [night, fontSize, tc])

  return (
    <div className="yukimi">
      <Layout className={night ? "night" : "day"}>
        {/* <Header className="header">
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header> */}
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>立夏</Breadcrumb.Item>
            <Breadcrumb.Item>1</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }} className="article">
              <div style={{
                fontSize: `${100+(25*fontSize)}%`,
              }}>
                <Novel novel={tc ? novelTc : novel} />
              </div>
            </Content>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ position: "sticky", top: 20 }}
                theme={night ? "dark" : "light"}
              >
                <SubMenu key="chapter" icon={<ReadOutlined />} title="章节">
                  {
                    novel.map((e, i) => (
                      <Menu.Item key={i}>{e.name}</Menu.Item>
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
                      tipFormatter={value => `${100+(25*value)}%`}
                    />
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="theme" icon={<BgColorsOutlined />} title="界面主题">
                  <Menu.Item key="night">
                    夜间模式 <Switch checked={night} size="small" onChange={() => {
                      setNight(night => !night)
                    }} />
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="lang" icon={<TranslationOutlined />} title="简繁转换">
                  <Menu.Item key="tc">
                    繁体中文 <Switch checked={tc} size="small" onChange={() => {
                      setTc(tc => !tc)
                    }} />
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Powered by <a target="_blank" href="https://github.com/yinyanfr/yukimi-lite">Yukimi-lite</a>
        </Footer>
      </Layout>
    </div>
  )
}

export default Yukimi
