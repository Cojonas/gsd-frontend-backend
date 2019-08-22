import React from 'react';
import { Icon, Button, Card, Tooltip } from 'antd';



function Release (props) {
    const node = props.data.node

    const assets = node.releaseAssets.edges;
    const hasAsset= assets.length > 0;

    const sizeLabel = hasAsset ? parseInt(assets[0].node.size / 1024 / 1024) + "MB" : "-"
    var asset = hasAsset ? 
        <Tooltip title={sizeLabel}><Button type="primary" size="large" icon="download" ><a href={assets[0].node.downloadUrl}> Download</a> </Button></Tooltip> 
        : <p>No Asset</p>

    
    var tag_name = node.tagName;
    var published = new Date(node.publishedAt).toLocaleDateString();
    var description = node.description
    return <>

        <Card title={tag_name} style={{width: "100%"}}>
        <p><Icon type="calendar" /> {published}</p>
        <p><Icon type="tag" /> {description}</p>
        <p><Icon type="download" /> {sizeLabel}</p>
        <div style={{float: "right"}}>{asset}  </div>             
        </Card>
    </>


}

export default Release;