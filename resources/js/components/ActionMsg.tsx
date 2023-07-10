import React from 'react';

interface ActionMsgProps {
  actionMsg: boolean;
  objAnimation: boolean;
}

const ActionMsg: React.FC<ActionMsgProps> = ({ actionMsg, objAnimation }) => {
  return (
    <>
      {actionMsg && (
        <div
          className={`bg-green-500 text-white text-center py-2 px-4 rounded-md mb-4 ${
            objAnimation ? 'animate-bounce' : ''
          }`}
        >
          Kanał został dodany!
        </div>
      )}
    </>
  );
};

export default ActionMsg;
