// src/components/types.ts
export interface IMessage {
    id: number;
    text: string;
  }
  
export interface IMessageListProps {
messages: IMessage[];
}

export interface IInputBoxProps {
onSendMessage: (message: string) => void;
}
