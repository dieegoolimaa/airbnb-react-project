import ListItem from "../components/ListItem";

const List = ({ items, deleteItem }) => {
  //   console.log(deleteItem); // Should log a function
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

export default List;
