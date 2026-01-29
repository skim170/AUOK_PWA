import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { TrendingUp, MapPin, Clock, Heart, MessageCircle, Eye } from 'lucide-react';

export function Home() {
  const featuredPosts = [
    {
      id: 1,
      category: '구인',
      title: '한인마트 파트타임 직원 구합니다',
      location: '어번',
      time: '2시간 전',
      views: 234,
      comments: 12,
      likes: 8,
      isPremium: true,
    },
    {
      id: 2,
      category: '중고',
      title: '소파 팝니다 ($150)',
      location: '오펠라이카',
      time: '3시간 전',
      views: 156,
      comments: 7,
      likes: 15,
    },
    {
      id: 3,
      category: '상점',
      title: '[한국마트] 신선 야채 입고 예정 (1/30)',
      location: '어번',
      time: '4시간 전',
      views: 445,
      comments: 23,
      likes: 67,
      isStore: true,
    },
    {
      id: 4,
      category: '모임',
      title: '주말 등산 모임 - 참가자 모집',
      location: '어번',
      time: '5시간 전',
      views: 189,
      comments: 15,
      likes: 22,
    },
  ];

  const storeNews = [
    {
      id: 1,
      name: '한국마트',
      news: '설날 특선 상품 예약 받습니다',
      time: '1시간 전',
    },
    {
      id: 2,
      name: '서울식당',
      news: '런치 스페셜 $10.99',
      time: '2시간 전',
    },
    {
      id: 3,
      name: '미용실 서울',
      news: '2월 예약 오픈',
      time: '3시간 전',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">어번-오펠라이카 한인 커뮤니티</h1>
          <p className="text-blue-100">
            구인·중고·모임·가게 소식을 한 곳에서 확인하세요
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              인기 게시글
            </h2>
            <Button variant="outline" size="sm">
              전체보기
            </Button>
          </div>

          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={post.isPremium ? 'default' : 'secondary'}>
                        {post.category}
                      </Badge>
                      {post.isPremium && (
                        <Badge variant="destructive" className="text-xs">
                          프리미엄
                        </Badge>
                      )}
                      {post.isStore && (
                        <Badge className="bg-green-600 text-xs">상점</Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {post.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Store News */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">상점 소식</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {storeNews.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-700 mb-1">{item.news}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full" size="sm">
                더보기
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">바로가기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                구인구직 등록
              </Button>
              <Button variant="outline" className="w-full justify-start">
                중고마켓 판매
              </Button>
              <Button variant="outline" className="w-full justify-start">
                동호회 만들기
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">총 게시글</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">등록 상점</span>
                  <span className="font-bold">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">활성 회원</span>
                  <span className="font-bold">892</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
