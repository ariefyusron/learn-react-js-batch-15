import storeTodo from '../../store/todo'

const ProductDetail = () => {
  const todoList = storeTodo((state) => state.todoList)

  return (
    <div>
      <div>Produk Detail</div>
      <p>Ada {todoList.length} data</p>
    </div>
  )
}

export default ProductDetail;