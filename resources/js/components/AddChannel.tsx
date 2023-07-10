import React from 'react';
import { Link } from 'react-router-dom';
import ActionMsg from './ActionMsg';

const AddChannel = ({
  actionMsg,
  objAnimation,
  createChannel,
  channel_name,
  setChannelName,
  clients_amount,
  setClientsAmount,
  errors,
}) => {
  const handleChannelNameChange = (e) => {
    setChannelName(e.target.value);
  };

  const handleClientsAmountChange = (e) => {
    setClientsAmount(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-3xl shadow-lg p-8 flex justify-center border">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-medium text-center mb-8 text-rose-600 underline">
            Add Channel
          </h1>
          <p className="text-white mb-8">
            Aplikacja umożliwiająca CRUD kanałów pozyskania klienta.
          </p>
          <ActionMsg actionMsg={actionMsg} objAnimation={objAnimation} />
          <div className="grid grid-cols-1 gap-4 items-center justify-center text-center">
            <form
              name="channel-adder__form"
              onSubmit={createChannel}
              method="POST"
            >
              <div className="mb-2">
                <label
                  htmlFor="channelName"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white py-1 px-1"
                >
                  Nazwa kanału:
                </label>
                <input
                  name="channel_name"
                  type="text"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-gray-500 ${
                    errors['channel_name'] ? 'form__input-error' : ''
                  }`}
                  value={channel_name}
                  onChange={handleChannelNameChange}
                  
                />
                {errors['channel_name'] && (
                  <div className="text-red-500 mt-2 text-xs">
                    {errors['channel_name']}
                  </div>
                )}
              </div>
              <div className="mb-8">
                <label
                  htmlFor="channelCount"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white py-1 px-1"
                >
                  Ilość klientów:
                </label>
                <input
                  name="clients_amount"
                  type="text"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-gray-500 ${
                    errors['clients_amount'] ? 'form__input-error' : ''
                  }`}
                  value={clients_amount}
                  onChange={handleClientsAmountChange}
                  
                />
                {errors['clients_amount'] && (
                  <div className="text-red-500 mt-2 text-xs">
                    {errors['clients_amount']}
                  </div>
                )}
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/"
                  className="py-2 px-4 border-2 border-white text-white hover:text-rose-600 hover:border-rose-600 pt-2 pb-2 pl-6 pr-6 text-center font-medium text-lg"
                  target="_self"
                >
                  Wróć
                </Link>
                <button
                  type="submit"
                  className="py-2 px-4 border-2 border-white text-white hover:text-rose-600 hover:border-rose-600 pt-2 pb-2 pl-6 pr-6 text-center font-medium text-lg"
                >
                  Dodaj kanał
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChannel;
