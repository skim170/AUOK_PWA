import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Search, Plus, MapPin, Clock, Phone, ExternalLink, Bell, Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Stores() {
  const stores = [
    {
      id: 1,
      name: '한국마트',
      category: '식료품',
      location: '어번',
      address: '123 Main St, Auburn, AL',
      phone: '(334) 555-0123',
      hours: '월-토 9AM-8PM',
      followers: 234,
      isPremium: true,
      image: 'korean grocery store',
      recentNews: '설날 특선 상품 예약 접수 중 (1/30)',
      rating: 4.8,
    },
    {
      id: 2,
      name: '서울식당',
      category: '한식당',
      location: '오펠라이카',
      address: '456 College St, Opelika, AL',
      phone: '(334) 555-0456',
      hours: '화-일 11AM-9PM',
      followers: 189,
      isPremium: true,
      image: 'korean restaurant food',
      recentNews: '런치 스페셜 $10.99 (평일 한정)',
      rating: 4.6,
    },
    {
      id: 3,
      name: '미용실 서울',
      category: '미용',
      location: '어번',
      address: '789 University Ave, Auburn, AL',
      phone: '(334) 555-0789',
      hours: '화-토 10AM-7PM',
      followers: 156,
      isPremium: false,
      image: 'hair salon beauty',
      recentNews: '2월 예약 오픈 (1/28)',
      rating: 4.9,
    },
    {
      id: 4,
      name: '오펠라이카 정비소',
      category: '자동차',
      location: '오펠라이카',
      address: '321 Industrial Blvd, Opelika, AL',
      phone: '(334) 555-0321',
      hours: '월-금 8AM-6PM',
      followers: 98,
      isPremium: false,
      image: 'auto repair mechanic',
      recentNews: '겨울 차량 점검 이벤트',
      rating: 4.7,
    },
    {
      id: 5,
      name: '김 보험 에이전시',
      category: '보험/금융',
      location: '어번',
      address: '555 Insurance Way, Auburn, AL',
      phone: '(334) 555-0555',
      hours: '월-금 9AM-5PM',
      followers: 67,
      isPremium: true,
      image: 'insurance office business',
      recentNews: '자동차 보험 무료 견적 상담',
      rating: 4.5,
    },
    {
      id: 6,
      name: '부산 피시방',
      category: '오락',
      location: '어번',
      address: '888 Gaming Rd, Auburn, AL',
      phone: '(334) 555-0888',
      hours: '매일 24시간',
      followers: 145,
      isPremium: false,
      image: 'pc gaming cafe',
      recentNews: '신규 게임 업데이트 완료',
      rating: 4.4,
    },
  ];

  const storeNews = [
    {
      id: 1,
      store: '한국마트',
      news: '설날 특선 상품 예약 접수',
      time: '1시간 전',
      isPremium: true,
    },
    {
      id: 2,
      store: '서울식당',
      news: '런치 스페셜 $10.99',
      time: '2시간 전',
      isPremium: true,
    },
    {
      id: 3,
      store: '미용실 서울',
      news: '2월 예약 오픈',
      time: '3시간 전',
      isPremium: false,
    },
    {
      id: 4,
      store: '김 보험 에이전시',
      news: '자동차 보험 무료 견적',
      time: '5시간 전',
      isPremium: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">한인 상점</h1>
          <p className="text-gray-600">총 {stores.length}개의 등록 상점</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          상점 등록하기
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="상점 검색..." className="pl-9" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="grocery">식료품</SelectItem>
                <SelectItem value="restaurant">식당</SelectItem>
                <SelectItem value="beauty">미용</SelectItem>
                <SelectItem value="auto">자동차</SelectItem>
                <SelectItem value="insurance">보험/금융</SelectItem>
                <SelectItem value="entertainment">오락</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="지역" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="auburn">어번</SelectItem>
                <SelectItem value="opelika">오펠라이카</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stores List */}
        <div className="lg:col-span-2 space-y-4">
          {stores.map((store) => (
            <Card key={store.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-48 bg-gray-100 flex-shrink-0">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/600x600/?${store.image}`}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                    {store.isPremium && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500 gap-1">
                        <Star className="w-3 h-3" />
                        프리미엄
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-xl">{store.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {store.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(store.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{store.rating}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Bell className="w-4 h-4" />
                        구독 {store.followers}
                      </Button>
                    </div>

                    {store.recentNews && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-3">
                        <p className="text-sm text-blue-900 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          {store.recentNews}
                        </p>
                      </div>
                    )}

                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {store.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {store.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {store.hours}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="gap-1">
                        <Phone className="w-4 h-4" />
                        전화하기
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <MapPin className="w-4 h-4" />
                        길찾기
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="w-4 h-4" />
                        상세보기
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Recent Store News */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                최신 상점 소식
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {storeNews.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-sm">{item.store}</h4>
                    {item.isPremium && (
                      <Badge variant="secondary" className="text-xs">
                        프리미엄
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{item.news}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full" size="sm">
                전체 소식 보기
              </Button>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">카테고리</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                  식료품 (2)
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                  식당 (1)
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                  미용 (1)
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                  자동차 (1)
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                  보험/금융 (1)
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Premium Ad */}
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-4">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                상점 프리미엄
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                구독자에게 푸시 알림을 보내고 상단에 고정하세요
              </p>
              <Button size="sm" className="w-full">
                자세히 알아보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
