import PropTypes from 'prop-types';
import styles from './List.module.css';

function List(props) {
    // const fruits = [{id: 1, name: 'passionfruit', calories: 97},
    //                 {id: 2, name: 'guava', calories: 68},
    //                 {id: 3, name: 'tangerine', calories: 53},
    //                 {id: 4, name: 'plum', calories: 46},
    //                 {id: 5, name: 'kiwi', calories: 61}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 60)
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={ item.id }>
                                                    { item.name }: &nbsp;
                                                    <b>{item.calories}</b></li>);

    return (<><h3 className={styles.listcategory}>{ category }</h3>
            <ul className={styles.listitems}>{ listItems }</ul></>)
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

export default List