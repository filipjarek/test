<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;

class ChannelController extends Controller
{
    public function index()
    {
        return Channel::orderBy('id', 'DESC')->get();
    }

    public function createChannel(Request $request)
    {
        $formInput = $this->validate($request, [
            'channel_name' => 'required|unique:channels|min:2|max:30',
            'clients_amount' => 'required|integer',
            'channel_color' => 'required',
        ]);

        Channel::create($formInput);
    }

    public function updateChannel(Request $request, $id)
    {
        $channel = Channel::find($id);

        if (!$channel) {
            return response()->json(['error' => 'Kanał nie został znaleziony'], 404);
        }

        $formInput = $this->validate($request, [
            'clients_amount' => 'sometimes|required|integer',
            'channel_color' => 'sometimes|required',
        ]);

        $channel->update($formInput);

        return $channel;
    }

    public function deleteChannel(Request $request, $id)
    {
        Channel::findOrFail($id)->delete();

        return Channel::orderBy('id', 'DESC')->get();
    }
}
