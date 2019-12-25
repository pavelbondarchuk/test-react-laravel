<?php

namespace App\Console\Commands;

use App\User;
use App\Model\Post;
use Illuminate\Console\Command;
use Symfony\Component\DomCrawler\Crawler;

class GetPost extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'post:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get post from reddit';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $link = 'https://www.reddit.com/';
        // Get html remote text.
        $html = file_get_contents($link);
        // Create new instance for parser.
        $crawler = new Crawler(null, $link);
        $crawler->addHtmlContent($html, 'UTF-8');

        $nodeValues = $crawler->filter('div.Post')->each(function (Crawler $node, $i) {
            $objContent = $node->evaluate('div[2]/div[3]');
            if (!$objContent->count()){
                $objContent = $node->evaluate('div[2]/article/div[1]');
            }
            $content = '';
            if ($objContent->count()) {
                $content = $objContent->outerHtml();
            }
            return [
                'headline' => $node->filter('h3')->text(),
                'content' => $content
            ];
        });
        $user = User::first();
        foreach ($nodeValues as $item) {
            $post = Post::firstOrNew(['headline'=> $item['headline']]);
            $post->content= $item['content'];
            $post->user_id= $user->id;
            $post->save();
        }
        return true;
    }
}
