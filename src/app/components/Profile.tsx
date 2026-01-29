import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { User, Settings, Heart, Bookmark, FileText, Store, LogOut } from 'lucide-react';

export function Profile() {
  const myPosts = [
    {
      id: 1,
      category: '중고마켓',
      title: '소파 팝니다',
      date: '2024-01-25',
      status: '판매중',
      views: 156,
    },
    {
      id: 2,
      category: '구인구직',
      title: '파트타임 직원 구합니다',
      date: '2024-01-20',
      status: '모집중',
      views: 234,
    },
  ];

  const bookmarks = [
    {
      id: 1,
      category: '중고마켓',
      title: '아이폰 14 Pro',
      date: '2024-01-26',
    },
    {
      id: 2,
      category: '동호회',
      title: '어번 등산 동호회',
      date: '2024-01-24',
    },
    {
      id: 3,
      category: '상점',
      title: '한국마트',
      date: '2024-01-22',
    },
  ];

  const subscribedStores = [
    {
      id: 1,
      name: '한국마트',
      category: '식료품',
      followers: 234,
    },
    {
      id: 2,
      name: '서울식당',
      category: '한식당',
      followers: 189,
    },
    {
      id: 3,
      name: '미용실 서울',
      category: '미용',
      followers: 156,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl bg-blue-600 text-white">
                김
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold mb-1">김철수</h1>
              <p className="text-gray-600 mb-3">kimcs@example.com</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm">
                <div className="text-center sm:text-left">
                  <span className="font-bold text-lg">{myPosts.length}</span>
                  <p className="text-gray-600">내 게시글</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-bold text-lg">{bookmarks.length}</span>
                  <p className="text-gray-600">북마크</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-bold text-lg">{subscribedStores.length}</span>
                  <p className="text-gray-600">구독 상점</p>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col gap-2">
              <Button variant="outline" className="gap-2">
                <Settings className="w-4 h-4" />
                설정
              </Button>
              <Button variant="outline" className="gap-2">
                <LogOut className="w-4 h-4" />
                로그아웃
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts" className="gap-2">
            <FileText className="w-4 h-4" />
            내 게시글
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="gap-2">
            <Bookmark className="w-4 h-4" />
            북마크
          </TabsTrigger>
          <TabsTrigger value="stores" className="gap-2">
            <Store className="w-4 h-4" />
            구독 상점
          </TabsTrigger>
        </TabsList>

        {/* My Posts */}
        <TabsContent value="posts" className="space-y-3">
          {myPosts.length > 0 ? (
            myPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge
                          variant={post.status === '판매중' || post.status === '모집중' ? 'default' : 'secondary'}
                        >
                          {post.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>게시일: {post.date}</span>
                        <span>조회 {post.views}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        수정
                      </Button>
                      <Button variant="outline" size="sm">
                        삭제
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">작성한 게시글이 없습니다</p>
                <Button>게시글 작성하기</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Bookmarks */}
        <TabsContent value="bookmarks" className="space-y-3">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {bookmark.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-1">{bookmark.title}</h3>
                      <p className="text-sm text-gray-600">북마크한 날짜: {bookmark.date}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Bookmark className="w-4 h-4 fill-current" />
                      저장됨
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">북마크한 항목이 없습니다</p>
                <Button variant="outline">둘러보기</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Subscribed Stores */}
        <TabsContent value="stores" className="space-y-3">
          {subscribedStores.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subscribedStores.map((store) => (
                <Card key={store.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Store className="w-6 h-6 text-blue-600" />
                      </div>
                      <Button variant="outline" size="sm">
                        방문
                      </Button>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                    <Badge variant="outline" className="text-xs mb-2">
                      {store.category}
                    </Badge>
                    <p className="text-sm text-gray-600">구독자 {store.followers}명</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Store className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">구독 중인 상점이 없습니다</p>
                <Button>상점 둘러보기</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            계정 설정
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            프로필 수정
          </Button>
          <Button variant="outline" className="w-full justify-start">
            알림 설정
          </Button>
          <Button variant="outline" className="w-full justify-start">
            비밀번호 변경
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
            회원 탈퇴
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
