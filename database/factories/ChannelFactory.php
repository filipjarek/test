<?php

namespace Database\Factories;

use App\Models\Channel;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChannelFactory extends Factory
{
    protected $model = Channel::class;

    public function definition()
    {
        return [
            'channel_name' => $this->faker->word,
            'clients_amount' => $this->faker->numberBetween(1, 100),
            'channel_color' => $this->faker->hexColor,
        ];
    }
}
