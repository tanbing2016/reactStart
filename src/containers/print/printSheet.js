import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table,} from 'antd';
import * as lacs from '../../actions/printSheetActions'


let NUM=0;
class PrintSheet extends Component{


 componentDidMount(){
    //开始打印
     if(navigator.userAgent.indexOf("Firefox")>0){// 如果是火狐浏览器，则支持自动打印，否则，手动打印  
		try{
            NUM++;
            let jsPrintSetup=window.jsPrintSetup;
	        let v = jsPrintSetup.getVersion();
	        jsPrintSetup.setOption('orientation', jsPrintSetup.kPortraitOrientation);
			// set top margins in millimeters
			jsPrintSetup.setOption('marginTop', 5);
			jsPrintSetup.setOption('marginBottom', 5);
			jsPrintSetup.setOption('marginLeft', 1);
			jsPrintSetup.setOption('marginRight', 1);
			// set page header
			jsPrintSetup.setOption('headerStrLeft', '便e批');
			jsPrintSetup.setOption('headerStrCenter', '');
			jsPrintSetup.setOption('headerStrRight', '&PT');
			// set empty page footer
			jsPrintSetup.setOption('footerStrLeft', '');
			jsPrintSetup.setOption('footerStrCenter', '');
			jsPrintSetup.setOption('footerStrRight', '');
			// Suppress print dialog
			jsPrintSetup.setSilentPrint(true);
			// Do Print
            jsPrintSetup.print();
            //window.print();
            console.log("第"+NUM+"次开始打印");
			// Restore print dialog
			jsPrintSetup.setSilentPrint(false);
	    } catch(e) {
	        if(confirm('请先安装打印插件，安装插件否则将不能打印！你可以进入点击firefox，工具->插件，搜索"JSPrintSetup "安装，或者点击确定进入插件首页安装！')){
	            window.location.href="https://addons.mozilla.org/zh-CN/firefox/addon/js-print-setup/?src=userprofile";
	        }
	    }
	}else{
        window.print();
	}

    let dispatch=this.props.dispatch;
    dispatch(lacs.closePrint()); 
 }
  sheetHeaders(headers){
    return headers.map((value,index)=>{
        return (
            <div  className="headers">
                 <span className="headers1">{value.label+":"}</span>
                 <span className="headers2">{value.value}</span>
            </div>
        )
    });
  }
  sheetFooters(footers){
    return footers.map((value,index)=>{
        return (
            <div className="footers">
                <span className="footers1">{value.label+":"}</span>
                <span className="footers2">{value.value}</span>
            </div>
        )
    });
  }
   onesheet(value){
        return (
            <div id="print">
                <div className="printList">
                    <div className="title">{value.title}</div>
                    {this.sheetHeaders(value.headers)}
                    <Table className="table" pagination={false} columns={value.columns} bordered dataSource={value.dataSource}  />
                    {this.sheetFooters(value.footers)}
                </div>
            </div>
        );

   } 
   sheets(sheetdatas){
       return sheetdatas.map((value,index,ar)=>{
           return this.onesheet(value);
       });
   }

    render(){
        let pdatas=this.props.print.datas;
        return (
            <div>
            {this.sheets(pdatas)}
            </div>
            );
    }
}
function mapStateToProps(state) {
    return {
        print:state.print,
    }
}
export default connect(mapStateToProps)(PrintSheet);