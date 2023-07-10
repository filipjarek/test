import React, { useState } from 'react';
import axios from 'axios';
import AddChannel from '../../components/AddChannel';

export default function CreateChannel() {
  const [channel_name, setChannelName] = useState('');
  const [clients_amount, setClientsAmount] = useState('');
  const [loader, setLoader] = useState(false);
  const [objAnimation, setObjAnimation] = useState(false);
  const [errors, setError] = useState<any[]>([]);
  const [actionMsg, setActionMsg] = useState(false);

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  const createChannel = (e: React.FormEvent) => {
    e.preventDefault();

    setLoader(true);

    axios
      .post('/api/channel/create', {
        channel_name: channel_name,
        clients_amount: clients_amount,
        channel_color: random_hex_color_code(),
      })
      .then((response) => {
        if (!response.data.error) {
          setLoader(false);
          setActionMsg(true);
          setObjAnimation(true);
          setChannelName('');
          setClientsAmount('');
          setError([]);

          setTimeout(function () {
            setObjAnimation(false);
            setActionMsg(false);
          }, 5500);
        }
      })
      .catch((error) => {
        setError(error.response.data.errors);
        setLoader(false);
      });
  };

  return (
    <main>
      <AddChannel
        channel_name={channel_name}
        clients_amount={clients_amount}
        setChannelName={setChannelName}
        setClientsAmount={setClientsAmount}
        createChannel={createChannel}
        errors={errors}
        actionMsg={actionMsg}
        objAnimation={objAnimation}
      />
    </main>
  );
}
