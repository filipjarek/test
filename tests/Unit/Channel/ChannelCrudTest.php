<?php

namespace Tests\Unit\Channel;

use Tests\TestCase;
use App\Models\Channel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class ChannelCrudTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_see_index_channel_page()
    {
        $channel = Channel::factory()->create();

        $response = $this->get('/');

        $response->assertSee('app');

        $response->assertOk();

        $channels = Channel::orderBy('id', 'DESC')->get();

        $response->assertStatus(200);
    }

    public function test_channel_table_have_records()
    {
        $channel = Channel::factory()->create();

        $this->assertNotEmpty($channel->channel_name);
    }

    public function test_can_create_channel()
    {
        $channel = Channel::factory()->create();

        $response = $this->get('/channel/create');    

        $response->assertStatus(200);
    }

    public function test_can_store_new_channel()
    {
        $channel = Channel::factory()->create();
        $response = $this->post('/channel/create/', [
            'channel_name' => 'Test',
            'clients_amount' => '100',
            'channel_color' => '#5ab34a',
        ]);

        $response->assertSessionHasNoErrors();  
       
        $this->assertCount(1, Channel::all());
    }

    public function test_can_update_channel()
    {
        $channel = Channel::factory()->create();

        $response = $this->post('/channel/update/'. $channel->id, [
            'channel_name' => 'Test2',
            'clients_amount' => '100',
            'channel_color' => '#5ab34a',
        ]);

        $response->assertSessionHasNoErrors();
    }

    public function test_delete_channel()   
    {
        $channel = Channel::factory()->create();
        $this->assertCount(1, Channel::all());
        $response = $this->post('/channel/delete', ['id' => $channel->id]);

        $response->assertSessionHasNoErrors();
    }
}
