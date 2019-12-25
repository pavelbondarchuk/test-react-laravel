<?php

use Illuminate\Database\Seeder;

class User extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table((new \App\User())->getTable())->insert(
            [
                [
                    'name'       => 'Test',
                    'email'      => 'test@test.test',
                    'password'   => bcrypt('123321'),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ]
        );
    }
}
