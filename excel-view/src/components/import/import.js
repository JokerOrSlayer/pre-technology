import React, { Component } from 'react';

import { Button, Upload } from 'element-react'

import 'element-theme-default';

class ImportExcel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileList: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg',
                status: 'finished'
            }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg',
                status: 'finished'
            }]
        };
    }

    render() {
        const { fileList } = this.state;
        return (
            <Upload
                className="upload-demo"
                action="//jsonplaceholder.typicode.com/posts/"
                onChange={(file, fileList) => this.handleChange(file, fileList)}
                fileList={fileList}
                tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
            >
                <Button size="small" type="primary">点击上传</Button>
            </Upload>
        )
    }
}

export default ImportExcel;