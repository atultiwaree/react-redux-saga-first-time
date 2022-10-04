import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD", action);
      if (data.find((x) => x == action.data)) {
        console.log("Its a match you fucking bitch...");
        return [...data];
      } else {
        return [...data, action.data];
      }

    case REMOVE_FROM_CART:
      console.log("REMOVE FUNCTION CALLED ", action);
      //   data.length = data.length ? data.length - 1 : [];
      const toRm = data.indexOf(action.data);
      const newArr = [...data];
      newArr.splice(toRm, 1);
      console.log(newArr);
      return newArr;
    //   console.log("Index : " + toRm + "Array : " + newArr);
    //   const rmElArr =
    //   console.log(
    //     "Spliced Element " + newArr.splice(toRm, 1) + "modified array " + newArr
    //   );

    //Sabse pehle index nikaal lenge fir us particular index pe rakhe element uda denge fir jo main page par cart hai uspe data ki lenght show karwa denge

    case EMPTY_CART:
      console.warn("EMPTY CART condition ", action);
      data = [];
      return [...data];
    default:
      return [];
  }
};
