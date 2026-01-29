import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Search, Plus, Users, Calendar, MapPin, Lock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Clubs() {
  const clubs = [
    {
      id: 1,
      name: '어번 등산 동호회',
      description: '주말마다 함께 등산하는 건강한 모임입니다',
      members: 45,
      category: '운동',
      isPublic: true,
      image: 'hiking mountain nature',
      nextEvent: '2월 1일 (토) 오전 9시',
    },
    {
      id: 2,
      name: '한인 골프 클럽',
      description: '골프 좋아하시는 분들 환영합니다',
      members: 32,
      category: '스포츠',
      isPublic: true,
      image: 'golf course sport',
      nextEvent: '2월 3일 (월) 오후 2시',
    },
    {
      id: 3,
      name: '요리 나눔 모임',
      description: '한식 레시피 공유 및 요리 모임',
      members: 28,
      category: '요리',
      isPublic: true,
      image: 'korean food cooking',
      nextEvent: '2월 5일 (수) 오후 6시',
    },
    {
      id: 4,
      name: '어번 축구 모임',
      description: '주말 아침 축구 함께 하실 분',
      members: 24,
      category: '운동',
      isPublic: true,
      image: 'soccer football field',
      nextEvent: '2월 2일 (일) 오전 10시',
    },
    {
      id: 5,
      name: '독서 토론 클럽',
      description: '한 달에 한 권씩 책을 읽고 토론합니다',
      members: 18,
      category: '문화',
      isPublic: false,
      image: 'books reading library',
      nextEvent: '2월 10일 (토) 오후 3시',
    },
    {
      id: 6,
      name: '사진 동호회',
      description: '사진 촬영 및 편집 기술 공유',
      members: 22,
      category: '취미',
      isPublic: true,
      image: 'camera photography',
      nextEvent: '2월 8일 (목) 오후 7시',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      club: '어번 등산 동호회',
      title: '체로키 록 등산',
      date: '2월 1일 (토)',
      time: '오전 9시',
      participants: 12,
    },
    {
      id: 2,
      club: '요리 나눔 모임',
      title: '떡볶이 만들기',
      date: '2월 5일 (수)',
      time: '오후 6시',
      participants: 8,
    },
    {
      id: 3,
      club: '어번 축구 모임',
      title: '주말 친선 경기',
      date: '2월 2일 (일)',
      time: '오전 10시',
      participants: 16,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">동호회 & 모임</h1>
          <p className="text-gray-600">총 {clubs.length}개의 동호회</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          동호회 만들기
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="동호회 검색..." className="pl-9" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="sports">운동/스포츠</SelectItem>
                <SelectItem value="culture">문화</SelectItem>
                <SelectItem value="cooking">요리</SelectItem>
                <SelectItem value="hobby">취미</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="공개 여부" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="public">공개</SelectItem>
                <SelectItem value="private">비공개</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clubs Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clubs.map((club) => (
              <Card key={club.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-40 bg-gray-100">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x400/?${club.image}`}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {club.isPublic ? (
                      <Badge className="bg-green-600">공개</Badge>
                    ) : (
                      <Badge variant="secondary" className="gap-1">
                        <Lock className="w-3 h-3" />
                        비공개
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {club.category}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{club.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {club.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Users className="w-4 h-4" />
                    <span>{club.members}명</span>
                  </div>
                  {club.nextEvent && (
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-3 pb-3 border-b">
                      <Calendar className="w-4 h-4" />
                      <span>{club.nextEvent}</span>
                    </div>
                  )}
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                다가오는 모임
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <p className="text-xs text-gray-500 mb-1">{event.club}</p>
                  <h4 className="font-semibold text-sm mb-2">{event.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date} {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>{event.participants}명 참가</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" size="sm">
                전체 일정 보기
              </Button>
            </CardContent>
          </Card>

          {/* Popular Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">인기 카테고리</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  운동/스포츠
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  요리
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  문화
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  취미
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  육아
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-300">
                  게임
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Guide */}
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">동호회 만들기</h4>
              <p className="text-sm text-gray-700 mb-3">
                관심사가 같은 사람들과 함께 모임을 시작해보세요!
              </p>
              <Button variant="outline" size="sm" className="w-full">
                가이드 보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
