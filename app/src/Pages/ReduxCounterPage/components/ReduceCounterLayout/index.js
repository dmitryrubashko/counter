import {Button} from "@mui/material";
import Counter from "../../../../commonComponents/Counter";


const ReduxCounterLayout = ({counters, handleCounterCreate, handleIncrement, index}) => {
  return (
    <div>
      <Button variant={'outlined'} onClick={handleCounterCreate}>Create Counter</Button>
      <div>
        {counters.map(({id, countValue}) => (
          <Counter
            key={id}
            countValue={countValue}
            id={id}
            handleIncrement={handleIncrement}/>
          ))}
      </div>
    </div>
  );
};

export default ReduxCounterLayout;
