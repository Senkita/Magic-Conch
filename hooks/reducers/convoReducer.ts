import { ConvoActionType } from "../../constants/convo.ts";
import { ICardProps } from "../../intf/props.ts";

const convoReducer: (
  state: Array<ICardProps>,
  action: { type: ConvoActionType; payload?: ICardProps },
) => Array<ICardProps> = (
  state: Array<ICardProps>,
  action: { type: ConvoActionType; payload?: ICardProps },
): Array<ICardProps> => {
  switch (action.type) {
    case ConvoActionType.Say:
      return [
        ...state,
        action.payload!,
      ];
    case ConvoActionType.Refresh:
      return [];
    default:
      return state;
  }
};

export default convoReducer;
