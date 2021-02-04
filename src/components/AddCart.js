const AddCart = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Cart</label>
        <input type="text" placeholder="Add Cart" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value="Save Cart" />
    </form>
  );
};

export default AddCart;
