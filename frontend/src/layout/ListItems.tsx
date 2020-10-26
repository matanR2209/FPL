import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BarChartIcon from '@material-ui/icons/BarChart';
import {AppComponent} from "../types/AppComponent";

interface IProps {
    onLisItemSelect: (selectedComponent: AppComponent) => void
}

export default function MainListItems(props: IProps) {
    const onSelect = (selectedComponent: AppComponent) => {
        props.onLisItemSelect(selectedComponent)
    }
    return (
        <div>
            <ListItem button onClick={() => onSelect(AppComponent.myTeam)}>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="My Team" />
            </ListItem>
            <ListItem button onClick={() => onSelect(AppComponent.myWatchList)}>
                <ListItemIcon>
                    <LocationSearchingIcon />
                </ListItemIcon>
                <ListItemText primary="My watch list" />
            </ListItem>
            <ListItem button onClick={() => onSelect(AppComponent.trending)}>
                <ListItemIcon>
                    <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
            </ListItem>
            <ListItem button onClick={() => onSelect(AppComponent.reports)}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
        </div>
    );
}

// export const secondaryListItems = (
//     <div>
//         <ListItem button>
//             <ListItemIcon>
//                 <EmailIcon />
//             </ListItemIcon>
//             <ListItemText primary="Feedback" />
//         </ListItem>
//     </div>
// );