import React, { Component } from 'react';
import { ListWraper, ListItem, ListInfo } from '../style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { comments, like, watch } from '../../../statics/common';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.selectedTab,
            listData: []
        }
        
    }

    render() {
        return (
            <div>
                {       
                     <ListWraper>
                         {
                            this.state.listData.length ? this.state.listData.map(item=>{
                                return <Link key={item.id} to={"detail/" + item.id}>
                                    <ListItem >
                                        <ListInfo>
                                            <h3 className="title">{item.name}</h3>
                                            <p className="desc">{item.description}</p>
                                            <p className="info">
                                                <span>
                                                    <img src={watch} alt=""/>
                                                    {item.watch}
                                                </span>
                                                <span>
                                                    <img src={comments} alt=""/>
                                                    {item.comment}
                                                </span>
                                                <span>
                                                    <img src={like} alt=""/>
                                                    {item.support}
                                                </span>
                                            </p>
                                        </ListInfo>
                                    </ListItem>
                                </Link>
                            }) : <p className="noDataTip">此分类下暂无文章...</p>
                         }
                     </ListWraper>
                    
                }
            </div>
        )
    }

    componentDidMount() {
        let type = '';
        switch(this.state.selectedTab){
            case 'recommend':
                type = '';
                break;
            case 'IT':
                type = 'IT';
                break;
            case '健身':
                type = 'fitness';
                break;
            case '养生':
                type = 'healthCare';
                break;
            case '随笔':
                type = 'note';
                break;
            default: 
                type = '';
                break;

        }
        axios.get('/php/index.php?type='+ type +'&keyword=').then(res=>{
            this.setState({
                listData: res.data
            });
        })
    }
}


export default List;