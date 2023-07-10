import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { suma } from './Total';
import axios, { AxiosResponse } from 'axios';
import swal from 'sweetalert';

interface Channel {
  id: number;
  channel_name: string;
  clients_amount: number;
  channel_color: string;
}

interface ChannelsManagerProps {
  channels: Channel[];  
}

const ChannelsManager: React.FC<ChannelsManagerProps> = ({ channels }) => {
  const [showModal, setShowModal] = useState(false);
  const [channelId, setChannelId] = useState<number | null>(null);
  const [newChannelName, setNewChannelName] = useState('');
  const [newClientsAmount, setNewClientsAmount] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    setChannelId(null);
    setNewChannelName('');
    setNewClientsAmount('');
  };

  const handleOpenModal = (channelId: number) => {
    const channel = channels.find((c) => c.id === channelId);
    if (channel) {
      setChannelId(channelId);
      setNewChannelName(channel.channel_name);
      setNewClientsAmount(channel.clients_amount.toString());
      setShowModal(true);
    }
  };

  const handleUpdateChannel = () => {
    if (newChannelName && newClientsAmount) {
      axios
        .post(`/api/channel/update/${channelId}`, {
          channel_name: newChannelName,
          clients_amount: Number(newClientsAmount),
        })
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            handleCloseModal();
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log('Błąd podczas aktualizacji kanału', error);
        });
    }
  };

  const handleDeleteChannel = (channelId: number) => {
    swal({
      title: 'Czy na pewno chcesz usunąć ten kanał?',
      text: 'Tej operacji nie można cofnąć!',
      icon: 'warning',
      buttons: ['Anuluj', 'Usuń'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .get(`/api/channel/delete/${channelId}`)
          .then((response: AxiosResponse) => {
            if (response.status === 200) {
              swal('Kanał został usunięty!', {
                icon: 'success',
              }).then(() => {
                window.location.reload();
              });
            }
          })
          .catch((error) => {
            console.log('Błąd podczas usuwania kanału', error);
          });
      }
    });
  };


  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 border border-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 text-md font-semibold">
              Nazwa kanału
            </th>
            <th scope="col" className="px-6 py-3 text-md font-semibold">
              Ilość klientów
            </th>
            <th scope="col" className="px-6 py-3 text-center text-md font-semibold">
              Akcje
            </th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id} className="bg-white border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <span
                  className="w-3 h-3 inline-block mr-2"
                  style={{ backgroundColor: channel.channel_color }}
                ></span>
                {channel.channel_name}
              </td>
              <td className="px-6 py-4 font-medium mr-2">
                {channel.clients_amount}
              </td>
              <td className="px-6 py-4 flex items-center justify-center">
                <button
                  className="flex items-center px-2 py-1 text-gray-400 hover:text-yellow-600"
                  onClick={() => handleOpenModal(channel.id)}
                >
                  <FaEdit className="mr-1" /> Edytuj
                </button>
                |
                <button
                  className="flex items-center px-2 py-1 text-gray-400 hover:text-red-600"
                  onClick={() => handleDeleteChannel(channel.id)}
                >
                  <FaTrash className="mr-1" /> Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200">
            <td className="px-6 py-3 text-md font-semibold text-gray-900">
              Suma:
            </td>
            <td className="px-6 py-3 text-md font-semibold text-gray-900">
              {suma(channels?.map((x) => x.clients_amount))}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

  {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
    <div className="bg-zinc-800 max-w-3xl shadow-lg p-8 flex justify-center border">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-medium text-center mb-8 text-rose-600 underline">Edit Channel</h1>
        <p className="text-white mb-8">Aplikacja umożliwiająca CRUD kanałów pozyskania klienta.</p>
        <div className="grid grid-cols-1 items-center justify-center text-center mb-2">
          <label htmlFor="newChannelName" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white py-1 px-1">
            Nazwa kanału:
          </label>
          <input
            id="newChannelName"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-gray-500"
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            disabled
          />
        </div>
        <div className="text-center mb-8">
          <label htmlFor="newClientsAmount" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white py-1 px-1">
            Ilość klientów:
          </label>
          <input
            id="newClientsAmount"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring focus:ring-gray-500 mb-2"
            value={newClientsAmount}
            onChange={(e) => setNewClientsAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="py-2 px-4 border-2 border-white text-white hover:text-rose-600 hover:border-rose-600 pt-2 pb-2 pl-6 pr-6 text-center font-medium text-lg"
            onClick={handleCloseModal}
          >
            Anuluj
          </button>
          <button
            className="py-2 px-4 border-2 border-white text-white hover:text-rose-600 hover:border-rose-600 pt-2 pb-2 pl-6 pr-6 text-center font-medium text-lg"
            onClick={handleUpdateChannel}
          >
            Zaktualizuj
          </button>
        </div>
      </div>
    </div>
  </div>
  )}

    </div>
    );
  };

export default ChannelsManager;
