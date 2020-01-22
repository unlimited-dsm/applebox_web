export const keyDownEvent = ({
  event,
  keyCode,
  OwnKeyCode
}: {
  event?: () => void;
  keyCode: string;
  OwnKeyCode: string;
}) => {
  if (keyCode === OwnKeyCode) {
    event();
  }
};
